import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Celular } from '../model/Celular';
import { CelularService } from './celular.service';

describe('CelularService', () => {
  let service: CelularService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CelularService]
    });
    service = TestBed.inject(CelularService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all celulares', () => {
    const dummyCelulares: Celular[] = [
      { id: 1, marca: 'Samsung', serial: '12345', fechaCompra: new Date(), anioLanzamiento: 2020, precio: 999, sistemaOperativo: 'Android', gama: 'Alta' },
      { id: 2, marca: 'Apple', serial: '67890', fechaCompra: new Date(), anioLanzamiento: 2021, precio: 1099, sistemaOperativo: 'iOS', gama: 'Alta' }
    ];

    service.getCelulares().subscribe(celulares => {
      expect(celulares.length).toBe(2);
      expect(celulares).toEqual(dummyCelulares);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCelulares);
  });

  it('should retrieve a celular by id', () => {
    const dummyCelular: Celular = { id: 1, marca: 'Samsung', serial: '12345', fechaCompra: new Date(), anioLanzamiento: 2020, precio: 999, sistemaOperativo: 'Android', gama: 'Alta' };

    service.getCelular(1).subscribe(celular => {
      expect(celular).toEqual(dummyCelular);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCelular);
  });

  it('should create a new celular', () => {
    const newCelular: Celular = { marca: 'Huawei', serial: '54321', fechaCompra: new Date(), anioLanzamiento: 2019, precio: 799, sistemaOperativo: 'Android', gama: 'Media' };

    service.createCelular(newCelular).subscribe(celular => {
      expect(celular).toEqual({ ...newCelular, id: 3 });
    });

    const req = httpMock.expectOne(`${service['baseUrl']}`);
    expect(req.request.method).toBe('POST');
    req.flush({ ...newCelular, id: 3 });
  });

  it('should update an existing celular', () => {
    const updatedCelular: Celular = { id: 1, marca: 'Samsung', serial: '12345', fechaCompra: new Date(), anioLanzamiento: 2020, precio: 999, sistemaOperativo: 'Android', gama: 'Alta' };

    service.updateCelular(1, updatedCelular).subscribe(celular => {
      expect(celular).toEqual(updatedCelular);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedCelular);
  });

  it('should delete a celular', () => {
    service.deleteCelular(1).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});

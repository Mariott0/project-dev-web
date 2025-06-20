import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPacienteComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: CadastroPacienteComponent;
  let fixture: ComponentFixture<CadastroPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

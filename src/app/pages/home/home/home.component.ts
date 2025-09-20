import { Component, OnInit } from '@angular/core';
import { AvaliationService } from '../../../services/avaliation.service';
import { AvaliationType } from '../../../types/AvaliationType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './introduction.component.css',
    './about.component.css',
    './benefits.component.css',
    './video.component.css',
    './forms.component.css',
    './how_works.component.css',
    './avaliation.component.css',
    './footer.component.css',
  ]
})
export class HomeComponent implements OnInit{
  yearActual: number = 0;
  
  /**data avaliation forms*/
  namePatient: string = "";
  typeCareLocation: string = "";
  nameLocation: string = "";
  dateAttendance: string = "";
  waitingTimeCare: string = "";
  descriptionCare: string = "";
  numberAvaliationAttendance: number = 0;

  /**callbacks & messages */
  callbackError: boolean = false;
  callbackSucess: boolean = false;
  messageError: string = "";
  messageSucess: string = "";

  /**stars attendance */
  isStarOneActive: boolean = false;
  clicksStarOne: number = 0;
  isStarTwoActive: boolean = false;
  isStarThreeActive: boolean = false;
  isStarFourActive: boolean = false;
  isStarFiveActive: boolean = false;

  constructor(
    private readonly avaliationService: AvaliationService
  ){}

  ngOnInit(): void {
    this.getYearActual();
  }

  getYearActual(){
    this.yearActual = new Date().getFullYear();
  }

  addOneStarAttendance(){
    this.clicksStarOne = this.clicksStarOne + 1;
    this.isStarOneActive = true;
    this.isStarTwoActive = false;
    this.isStarThreeActive = false;
    this.isStarFourActive = false;
    this.isStarFiveActive = false;
    this.numberAvaliationAttendance = 1;

    if(this.isStarOneActive && this.clicksStarOne == 2){
      this.clicksStarOne = 0;
      this.isStarOneActive = false;
      this.numberAvaliationAttendance = 0;
    }
  }

  addTwoStarAttendance(){
    this.isStarOneActive = true;
    this.isStarTwoActive = true;
    this.isStarThreeActive = false;
    this.isStarFourActive = false;
    this.isStarFiveActive = false;

    this.numberAvaliationAttendance = 2;
  }

  addThreeStarAttendance(){
    this.isStarOneActive = true;
    this.isStarTwoActive = true;
    this.isStarThreeActive = true;
    this.isStarFourActive = false;
    this.isStarFiveActive = false;

    this.numberAvaliationAttendance = 3;
  }

  addFourStarAttendance(){
    this.isStarOneActive = true;
    this.isStarTwoActive = true;
    this.isStarThreeActive = true;
    this.isStarFourActive = true;
    this.isStarFiveActive = false;

    this.numberAvaliationAttendance = 4;
  }

  addFiveStarAttendance(){
    this.isStarOneActive = true;
    this.isStarTwoActive = true;
    this.isStarThreeActive = true;
    this.isStarFourActive = true;
    this.isStarFiveActive = true;

    this.numberAvaliationAttendance = 5;
  }

  sendAvaliation(){
    this.validateFields();

    const dataSaveAvaliation: AvaliationType = {
      'namePatient': this.namePatient, 
      'typeCareLocation': this.typeCareLocation,
      'nameLocation': this.nameLocation,
      'dateAttendance': this.dateAttendance,
      'waitingTimeCare': this.waitingTimeCare,
      'numberAvaliationAttendance': this.numberAvaliationAttendance,
      'descriptionCare': this.descriptionCare
    };

    console.log(dataSaveAvaliation);

    this.avaliationService.saveAvaliationProd(dataSaveAvaliation).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  validateFields(){
    if(
      !this.namePatient ||
      !this.nameLocation ||
      !this.typeCareLocation ||
      !this.dateAttendance ||
      !this.waitingTimeCare ||
      !this.descriptionCare
    ){
      console.log("Campo(s) obrigatório(s) vazio(s)");
      //TODO: implementar callback
    }

    if(this.numberAvaliationAttendance === 0){
      console.log("Número de estrelas da nota de atendimento precisa ser no mínimo 1");
    }

    if(this.namePatient.length < 4 || this.namePatient.length > 30){
      console.log("Nome do paciente deve ter dentre 4 a 30 caracteres" + this.namePatient);
      //TODO: implementar callback
    }

    if(this.nameLocation.length < 4 || this.nameLocation.length > 60){
      console.log("Nome do Local deve ter dentre 4 a 60 caracteres" + this.nameLocation);
      //TODO: implementar callback
    }

    console.log(this.dateAttendance);
    console.log("Data de atendimento - tamanho: " + this.dateAttendance.length);

    if(this.dateAttendance.length !== 10){
      console.log("Formato da data inválida" + this.dateAttendance); //10/10/2010
      //TODO: implementar callback
    }

    if(this.descriptionCare.length < 4 || this.descriptionCare.length > 2000){
      console.log("Descrição deve ter dentre 4 a 2000 caracteres" + this.descriptionCare);
      //TODO: implementar callback
    }
  }
}

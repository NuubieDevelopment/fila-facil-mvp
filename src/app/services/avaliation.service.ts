import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AvaliationType } from '../types/AvaliationType';
import { Observable } from 'rxjs';
import { MessageStatusType } from '../types/MessageStatusType';

@Injectable({
  providedIn: 'root'
})
export class AvaliationService {
  constructor(
    private readonly http: HttpClient
  ) { }

  saveAvaliationLocal(avaliationTYpe: AvaliationType): Observable<MessageStatusType>{
    const dataSaveAvaliation = {
      'patient_name': avaliationTYpe.namePatient, 
      'type_care_location': avaliationTYpe.typeCareLocation,
      'name_location': avaliationTYpe.nameLocation,
      'date_attendance': avaliationTYpe.dateAttendance,
      'waiting_time_care': avaliationTYpe.waitingTimeCare,
      'number_avaliation_attendance': avaliationTYpe.numberAvaliationAttendance,
      'description_care': avaliationTYpe.descriptionCare
    };

    return this.http.post<MessageStatusType>('http://localhost:8000/api/save_avaliation/local', dataSaveAvaliation);
  }

    saveAvaliationProd(avaliationTYpe: AvaliationType): Observable<MessageStatusType>{
    const dataSaveAvaliation = {
      'patient_name': avaliationTYpe.namePatient, 
      'type_care_location': avaliationTYpe.typeCareLocation,
      'name_location': avaliationTYpe.nameLocation,
      'date_attendance': avaliationTYpe.dateAttendance,
      'waiting_time_care': avaliationTYpe.waitingTimeCare,
      'number_avaliation_attendance': avaliationTYpe.numberAvaliationAttendance,
      'description_care': avaliationTYpe.descriptionCare
    };

    return this.http.post<MessageStatusType>('https://filafacilmvpbackend.onrender.com/api/save_avaliation/prod', dataSaveAvaliation);
  }
}

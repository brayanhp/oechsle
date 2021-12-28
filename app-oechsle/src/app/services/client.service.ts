import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { IClient } from '../models/client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private firestore: Firestore) { }

  getClients() {
    const dataClients = collection(this.firestore, 'clientes');
    return collectionData(dataClients, {idField: 'id'}) as Observable<IClient[]>;
  }

  addClient(client: IClient) {
    const clientPayload = collection(this.firestore, 'clientes');
    return addDoc(clientPayload, client);
  }

}

using { myDB } from '../db/Schema';


service ProcessorService { 
    entity IncidentsSet @odata.draft.enabled as projection on myDB.Incidents;

    @readonly
    entity CustomersSet as projection on myDB.Customers;
}




service AdminService {
    entity CustomersSet as projection on myDB.Customers;
    entity IncidentsSet as projection on myDB.Incidents;
    }

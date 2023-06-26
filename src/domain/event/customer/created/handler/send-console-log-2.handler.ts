import EventHandlerInterface from "../../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../../created/customer-created.event";


export default class SendConsoleLog2Handler implements EventHandlerInterface<CustomerCreatedEvent> {
    handle(event: CustomerCreatedEvent): void {
        console.log(`Esse é o segundo console.log do evento: CustomerCreated`)
    }
}
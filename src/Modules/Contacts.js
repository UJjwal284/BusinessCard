import faker from "@faker-js/faker";
import ContactCard from "../Components/ContactCard";

export default function Contacts() {
    let details = []
    for (let i = 0; i < 5; i++) {
        details.push({
            image: faker.image.cats(200, 130),
            name: faker.name.firstName(),
            phone: faker.phone.phoneNumber('501-###-####'),
            email: faker.internet.email()
        })
    }

    console.log(...details)
    console.log(details)

    return (
        <div className={'contacts-main mx-auto'}>
            <ContactCard details={details}/>
        </div>
    )
}
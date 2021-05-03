import { Card, CardsWrapper, CardHeader, CardAuthor, CardAuthorInfo, CardBody } from "./styled";

import ColtonPicture from '../../assets/images/image-colton.jpg';
import IrenePicture from '../../assets/images/image-irene.jpg';
import AnnePicture from '../../assets/images/image-anne.jpg';

const authors = [{

    fullname: "Colton Smith",
    image: ColtonPicture,
    status: "Verified Buyer",
    description:'" We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time.Excellent! "'
},
{

    fullname: "Irene Roberts",
    image: IrenePicture,
    status: "Verified Buyer",
    description:'" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "',
    options: {
        second: true
    } 
 
},
{

    fullname: "Anne Wallace",
    image: AnnePicture,
    status: "Verified Buyer",
    description: '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "', 
    options: {
        third: true
    } 

}]

export default function Cards() {
    
    return (
        <CardsWrapper>
            {
                authors.map(({image, fullname, status, options, description }, i) => (
                    <Card key={i + fullname} {...options}>
                        <CardHeader>
                            <CardAuthor>
                                <img src={image} alt="colton" />
                            </CardAuthor>
                            <CardAuthorInfo>
                                <p className="name">{fullname}</p>
                                <p className="status">{status}</p>
                            </CardAuthorInfo>
                        </CardHeader>
                        <CardBody>
                            <p className="description">{description}</p>
                        </CardBody>
                    </Card>

                ))
            }
        </CardsWrapper>
    )
}

import Button from "../controls/button/button"
import Card from "../controls/card/card"
import CardBody from "../controls/card/card-body"
import CardHeader from "../controls/card/card-header"

const Admin = () => {

    return (
        <>
            <Card>

                <CardHeader>Beneficiaries</CardHeader>
                <CardBody><h1>Admin</h1></CardBody>
                <Button onClick={
                    () => console.log("buton apasat")
                }>Buton</Button>
                
            </Card>
        </>
    )

}
export default Admin
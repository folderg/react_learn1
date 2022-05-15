import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Profile = () =>{
    return(
        <Card>
            <Card.Body>
                <Card.Title> card tittle</Card.Title>
                <Card.Text> text</Card.Text>
                <Form>
                      {['checkbox', 'checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                          />

                          
                        </div>
                      ))}
                </Form>



            </Card.Body>
        </Card>
    )

}

export default Profile;
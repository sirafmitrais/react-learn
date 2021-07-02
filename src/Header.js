import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


export default function Header(props) {
    return (
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">Notes And Posts</h1>
            </Jumbotron>
        </Container >
    )
}
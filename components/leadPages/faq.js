import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class FAQ extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Accordion defaultActiveKey={0}>
          {
            this.props.faq.map((item, index) => {
              
              return (
                <Card key={index} className="-no-shadow -no-hover border-radius__0" style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Accordion.Toggle as={Card.Header} eventKey={index+1} className="color__dark">
                    {item.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={index+1}>
                    <Card.Body className="color__grey">
                      {item.body()}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ) 
                
            })
          }
        </Accordion>
      </React.Fragment>
    );
  }
}

export default FAQ;
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = (props) => {

      return (
            <div>
                  <Card style={{ margin: "10px", padding: "2px" }}>
                        <CardBody  >
                              <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{ opacity: "0.6" }} >

                              </CardImg>
                              <CardImgOverlay>

                                    <CardTitle onClick={props.function}

                                          style={{ cursor: "pointer" }}>

                                          {props.dish.name}
                                    </CardTitle>

                              </CardImgOverlay>

                        </CardBody>
                  </Card>
            </div >
      );
}
export default MenuItem;
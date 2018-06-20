
import * as React from "react";
import { Grid, Row, Col } from "react-bootstrap";

export class MainLayout extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Grid fluid={true}>
          <Row>
            <Col xs={12}>
              <div>
                <h1 className="myclass">Rendering in main layout</h1>
                {this.props.children}
              </div>
            </Col>
          </Row>
      </Grid>
    )
  }
}

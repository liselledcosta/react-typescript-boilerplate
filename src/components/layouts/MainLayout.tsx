
import * as React from "react";
import { HeaderLayout } from "./HeaderLayout";

export class MainLayout extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderLayout />
        {this.props.children}
      </div>
    )
  }
}

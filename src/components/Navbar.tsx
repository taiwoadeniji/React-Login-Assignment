import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export interface myMenuProps {
    name: string
}
export default class MenuExampleSecondary extends Component<myMenuProps> {
  state = { activeItem: "home" };

  handleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => this.setState({ activeItem:this.props.name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={ () => this.handleItemClick}
        />
        <Menu.Item
          name="react"
          active={activeItem === "react"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="javascript"
          active={activeItem === "javascript"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="node"
          active={activeItem === "node"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="python"
          active={activeItem === "python"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="Signup"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
import * as React from "react";

export interface ShowFormProps { compiler: string; framework: string; }
//export interface DJNameFormProps {name: string;}
//export interface ShowNameFormProps {name: string;}



export class ShowForm extends React.Component<ShowFormProps, any> 
{
  constructor(props: any) {
    super(props);
    this.state = {name: "show" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event:any) : void {
    this.setState({name: event.target.value});
  }

  public handleSubmit(event:any) : void {
    alert('A show name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Show Name:
          <br/>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          DJ Name(s):
          <br/>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}


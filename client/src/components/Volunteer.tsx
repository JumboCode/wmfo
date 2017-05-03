import * as React from "react";
export interface VolunteerProps { compiler: string; framework: string; }


export class Volunteer extends React.Component<VolunteerProps, undefined> {
    render() {
    	return (
    		<VolunteerForm />
		);
    }
}



export class VolunteerForm extends React.Component<any, any> 
{
  constructor(props: any) {
    super(props);
    this.state = {name: "volunteer" };

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
         	Given Name:
         	<br/>
         	<input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <label>
        	Date (MM/DD/YYYY):
        	<br/>
         	<input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


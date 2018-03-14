import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';


export default class App extends Component{
  state={
    step:1
  }
onNextClick = (e)=>{
  e.preventDefault();
  this.setState({
  step : this.state.step + 1
  })
};
onBackClick = (e) =>{
  e.preventDefault();
  this.setState({
    step : this.state.step - 1
  })
};

render(){
  switch (this.state.step) {
			case 1:
        return <First onNextClick={this.onNextClick}/>
      case 2:
        return <Second onNextClick={this.onNextClick}
      onBackClick={this.onBackClick}
      />
      case 3:
        return <SubjectDashboard onNextClick={this.onNextClick}
      onBackClick={this.onBackClick} />
      case 4:
      return <Third onBackClick={this.onBackClick}/>
      case 5:
      return <Fourth onNextClick={this.onNextClick}
    onBackClick={this.onBackClick} />
    }
  }
}
class First extends Component{
  handleNext = event => {
    this.props.onNextClick(event);
  };
  render(){
    return(
      <div>
      <div>
      <label>Enter your branch</label>
      <input type="text" />
      <label>Section</label>
      <input type="text" />
      <button onClick ={this.handleNext}>next</button>
      </div>
      </div>
    );
  }
}
class Second extends Component{
  handleBack = event =>{
    this.props.onBackClick(event);
  };
  handleNext = event => {
    this.props.onNextClick(event);
  };
  render(){
    return(
      <div>
    <div className="ui sub header">Semister</div>
    <select name="Semister" className="ui search dropdown">
    <option value="">semister</option>
    <option value="first">First</option>
    <option value="second">Second</option>
    <option value="third">Third</option>
    <option value="fourth">Fourth</option>
    </select>
    <button onClick={this.handleBack}>back</button>
    <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}

class SubjectDashboard extends Component{
  state={
    subjects:[
      {sub:'maths',
      time:1,
      id:uuid.v4(),
    },
      {sub:'daa',
      time:1.5,
      id:uuid.v4(),
    },
    ],
  };
  handleBack = event =>{
    this.props.onBackClick(event);
  };
  handleNext = event => {
    this.props.onNextClick(event);
  };
handleEditFormSubmit = (attrs) => {
this.updateSubject(attrs);
};
handleCreateFormSubmit = (subject)=>{
  this.createSubject(subject);
};
handleEditFormSubmit = (attrs) => {
this.updateSubject(attrs);
};
handleTrashClick = (subjectid) =>{
  this.deleteSubject(subjectid);
};
deleteSubject = (subjectid) =>{
  this.setState({timers:this.state.subjects.filter(s => s.id !== subjectid),
  });
};
updateSubject= (attrs) => {
  this.setState({
  subjects: this.state.subjects.map((subject) => {
  if (subject.id === attrs.id) {
  return Object.assign({}, subject, {
  sub: attrs.sub,
  time: attrs.time,
  });
  } else {
  return subject;
  }
  }),
  });
  };
  createSubject = (subject)=>{
    function newSubject(attrs = {}) {
    const subject = {
      sub: attrs.sub || 'Subject',
      time: attrs.time || 'Time',
      id: uuid.v4(), // eslint-disable-line no-undef
    };
    return subject;
  };
  const s = newSubject(subject);
  this.setState({
    subjects:this.state.subjects.concat(s),
  });
};

  render(){
    return(
      <div>
      <EditableSubjectList
      subjects={this.state.subjects}
      onFormSubmit={this.handleEditFormSubmit}
      onTrashClick={this.handleTrashClick}
    />

      <ToggleSubectForm
      onFormSubmit={this.handleCreateFormSubmit}
      />
      <button onClick={this.handleBack}>back</button>
      <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
class EditableSubjectList extends Component{
  render(){
    const subjects = this.props.subjects.map((subject)=>(
      <EditableSubject
      key={subject.id}
      id={subject.id}
      sub={subject.sub}
      time={subject.time}
      onFormSubmit={this.props.onFormSubmit}
      onEditClick={this.props.onEditClick}
      onTrashClick={this.onTrashClick}
      />

    ));
    return(
      <div>
      {subjects}
      </div>
    );
  }
}
class EditableSubject extends Component{
  state={
    editSubjectOpen:false,
  };
handleEditClick = ()=>{
  this.openForm();
};
  handleFormClose = () => {
this.closeForm();
};
handleSubmit = (timer) => {
this.props.onFormSubmit(timer);
this.closeForm();
};
closeForm = () =>{
  this.setState({editSubjectOpen:false});
};
openForm = ()=>{
  this.setState({editSubjectOpen:true});
};
  render(){
    if(this.state.editSubjectOpen){
      return(
        <SubjectForm
        id={this.props.id}
        sub={this.props.sub}
        time={this.props.time}
        onFormSubmit={this.handleSubmit}
        onFormClose={this.handleFormClose}
        />
      );
    }else{
      return(
        <Subject
        id={this.props.id}
        sub={this.props.sub}
        time={this.props.time}
        onEditClick={this.handleEditClick}
        onTrashClick={this.props.onTrashClick}  />
      );
    }
    }
  }

class SubjectForm extends Component{
  state={
    sub:this.props.sub || "",
    time:this.props.time || "",
  };
  handleSubChange = (e) =>{
    this.setState({sub:e.target.value});
  };
  handleTimeChange = (e) =>{
    this.setState({time:e.target.value});
  };
  handleSubmit = () =>{
    this.props.onFormSubmit({
      id:this.props.id,
      sub:this.props.sub,
      time:this.props.time,
    });
  };
  render(){
    const submitText = this.props.id ? 'Update' : 'Create';
    return(
      <div>
    <label>subject</label>
    <input type="text" value={this.state.sub}  onChange={this.handleSubChange} />
    <label>Time</label>
    <input type="number" value={this.state.time} onChange={this.handleTimeChange} />
    <button onClick={this.handleSubmit} >create</button>
    <button onClick={this.props.onFormClose} >cancle</button>
    </div>
  );
    }
}

class ToggleSubectForm extends React.Component{
  state={
    isOpen:false,
  }
  handleFormOpen = () =>{
    this.setState({
      isOpen:true,
    });
  };
  handleFormClose = ()=>{
    this.setState({
      isOpen:false,
    });
  };
  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };
  render(){
    if(this.state.isOpen){
      return(
        <SubjectForm  onFormSubmit={this.handleFormSubmit}
        onFormClose={this.handleFormClose} />
      );
    }
      else{
        return(
          <button onClick={this.handleFormOpen}>+</button>
        );
      }
    }
  }
  class Subject extends Component{
    handleTrashClick = ()=>{
      console.log("deleted");
      this.props.onTrashClick(this.props.id);
    };
    handleEditClick = event => {
   this.props.onEditClick(event);
 }
    render(){
      return(
        <div>
        <p>{this.props.sub}</p>
        <p>{this.props.time}</p>
        <button onClick={this.handleEditClick}>Edit</button>
        <button onClick={this.handleTrashClick}>Delete</button>
        </div>
      );
    }
  }
  class Third extends Component{
    handleBack = event =>{
      this.props.onBackClick(event);
    };
    handleNext = event => {
      this.props.onNextClick(event);
    };
    render(){
      return(
        <div>
        <p>no. of faculties</p>
        <input type='text' />
        <button onClick ={this.handleBack}>back</button>
        <button onClick ={this.handleNext}>next</button>
        </div>
      );
    }
  }
  class Fourth extends Component{
    handleBack = event =>{
      this.props.onBackClick(event);
    };
    render(){
      return(
        <div>
        <p>no. of rooms</p>
        <input type='text' />
        <button onClick ={this.handleBack}>back</button>
        </div>
      );
    }
  }

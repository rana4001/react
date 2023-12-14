import React, { Component } from "react";

class TeamMember extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6">
        <div className="card">
          <div className="card-header">
            <img style={{ maxWidth: '100%', height: 'auto' }} src={this.props.img} alt='' />
          </div>
          <div className="card-body">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{this.props.name}</h2>
            <h5 style={{ color: '#555', marginBottom: '1rem' }}>{this.props.position}</h5>
            <div style={{ marginBottom: '0.5rem' }}>{this.props.phone}</div>
            <div style={{ marginBottom: '0.5rem' }}>{this.props.email}</div>
            <div style={{ color: '#007bff' }}>{this.props.website}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;

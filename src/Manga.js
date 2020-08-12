import React from 'react';

class Manga extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: {}
        }
    }
    componentDidMount() {
        const url = `http://localhost:3000/api/${this.props.match.params.id}.json`;
        console.log('url',url)
        fetch(url)
            .then(res => res.json())
            .then(json =>  {
                console.log('manga', json);
                this.setState({
                    name: json.name
                });
                console.log('state', this.state.name);
            });
            
    }
  render() {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    );
  }
}

export default Manga;

// `http://localhost:3000/api/${this.props.match.params.id}.json`;


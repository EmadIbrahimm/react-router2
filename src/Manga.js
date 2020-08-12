import React from 'react';

class Manga extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            author: '',
        }
    }
    componentDidMount() {
        const url = `http://localhost:3003/api/${this.props.match.params.id}.json`;
        console.log('url',url)
        fetch(url)
            .then(res => res.json())
            .then(json =>  {
                console.log('manga', json);
                this.setState({
                    name: json.name,
                    author: json.author,
                });
                console.log('name', this.state.name);
            });
            
    }
    componentDidUpdate() {
        const url = `http://localhost:3003/api/${this.props.match.params.id}.json`;
        fetch(url)
            .then(res => res.json())
            .then(json =>  {
                console.log('manga', json);
                this.setState({
                    name: json.name,
                    author: json.author,
                });
                console.log('name', this.state.name);
            });

            

    }
  render() {
    //   console.log(this.state.name)
    return (
      <div>
        <p> {this.state.author} </p>  
        {/* {this.props.match.params.id} */}
        <p>{this.state.name} </p>
        
      </div>
    );
  }
}

export default Manga;

// `http://localhost:3000/api/${this.props.match.params.id}.json`;


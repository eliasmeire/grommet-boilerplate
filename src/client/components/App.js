import React, { Component } from 'react';
import { Button, Paragraph } from 'grommet';
import Edit from 'grommet/components/icons/base/Edit';
import { connect } from 'react-redux';
import { fetchSomething } from '../redux/actions';
import './App.scss';

class App extends Component {
  componentWillMount() {
    this.props.fetchSomething();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="app">
        <Button icon={<Edit />}
                label='Edit'
                onClick={() => null}
        />
        {data && data.map((d,i) => <Paragraph key={i}>{d.properties.label}</Paragraph>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.something.data
  }
}

export default connect(
  mapStateToProps,
  { fetchSomething }
)(App)

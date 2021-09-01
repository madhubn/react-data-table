import React, { Component } from 'react';
import { render } from 'react-dom';
import { useTable } from 'react-table';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
  rows: any;
  columns: any;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = [
      {
        name: 'React',
        rows: [
          {
            col1: 'Hello',
            col2: 'World'
          },
          {
            col1: 'react-table',
            col2: 'rocks'
          },
          {
            col1: 'whatever',
            col2: 'you want'
          }
        ],
        columns: [
          {
            Header: 'Column 1',
            accessor: 'col1' // accessor is the "key" in the data
          },
          {
            Header: 'Column 2',
            accessor: 'col2'
          }
        ]
      }
    ];
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

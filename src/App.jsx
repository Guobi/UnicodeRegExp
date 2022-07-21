import React from 'react';
import './App.css';
import sampleText from './SampleText.json';

function App() {
  const regExpArray = [
    ['.', 'Anything'],
    ['\\w', 'English word'],
    ['\\p{Letter}', 'Letter'],
    ['\\p{Number}', 'Number'],
    ['\\p{P}', 'Punctuation'],
    ['\\p{M}', 'Mark'],
    ['\\p{Currency_Symbol}', 'Currency'],
    ['(?=[\\p{Emoji}])[\\D]', 'Emoji'],
    ['\\p{ASCII}', 'ASCII'],
    ['\\p{sc=Latin}', 'Latin'],
    ['\\p{sc=Han}', 'Chinese'],
    ['\\p{sc=Hiragana}', 'Japanese Hiragana 平假名'],
    ['\\p{sc=Katakana}', 'Japanese Katakana 片假名'],
    ['\\p{sc=Hang}', 'Korean'],
    ['\\p{sc=Arabic}', 'Arabic'],
    ['\\p{sc=Cyrillic}', 'Cyrillic'],
    ['\\p{sc=Greek}', 'Greek'],
    ['\\p{sc=Hebrew}', 'Hebrew'],
    ['\\p{sc=Myanmar}', 'Myanmar'],
    ['\\p{sc=Thai}', 'Thai'],
    // ['\\p{name=/smiling/} ', '\\p{name=/smiling/} '],
  ];

  const outputArray = [];
  const initText = 'A better world designed and made for all';
  const [text, setText] = React.useState(initText);
  const [sampleSelect, setSampleSelect] = React.useState(initText);

  regExpArray.forEach((regexp) => {
    try {
      const ret = text.match(new RegExp(regexp[0], 'ugs'));
      outputArray.push({ regexp, ret });
    } catch (e) {
      console.error(`${regexp[0]} Wrong pattern`);
    }
  });

  return (
    <div className="App text-start d-flex flex-column container p-4">
      <div className="d-flex flex-column align-items-start">
        <div className="h5 text-primary">
          Enter text here:
        </div>
        <textarea
          className="textarea form-control"
          placeholder="Enter text here"
          type="text"
          value={text}
          onChange={(e) => { setText(e.target.value); }}
        />
      </div>
      <div className="d-flex flex-column align-items-start mt-4">
        <div className="h5 text-primary">
          Select sample text:
        </div>
        <select
          className="form-select"
          value={sampleSelect}
          onChange={(e) => {
            setSampleSelect(e.target.value);
            setText(e.target.value);
          }}
        >
          {sampleText.map((item) => (
            <option key={item.code} value={item.text}>{`${item.language} : ${item.text}`}</option>
          ))}
        </select>
      </div>
      <div className="d-flex flex-column align-items-start mt-4">
        <div className="h5 text-primary">
          Regular expression match result:
        </div>
        <table className="table table-light table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">RegExp</th>
              <th scope="col">Description</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {
              outputArray.map((item) => (
                <tr key={item.regexp[0]}>
                  <td>{`/${item.regexp[0]}/gu`}</td>
                  <td>{item.regexp[1]}</td>
                  <td>{item.ret}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start mt-4">
        <div className="h5 text-primary">Useful links</div>
        <li><a className="useful-link" href="https://util.unicode.org/UnicodeJsps/character.jsp">Unicode Utilities: Character Properties</a></li>
        <li><a className="useful-link" href="https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp">Unicode Utilities: UnicodeSet</a></li>
        <li><a className="useful-link" href="https://unicode.org/reports/tr18/">UNICODE REGULAR EXPRESSIONS</a></li>
        <li><a className="useful-link" href="https://regex101.com/">Regular Expression online tester</a></li>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import sampleText from './SampleText.json';

function App() {
  const regExpArray = [
    ['.', 'Anything'],
    ['\\p{Letter}', 'Letter'],
    ['\\p{Number}', 'Number'],
    ['\\p{P}', 'Punctuation'],
    ['\\p{M}', 'Mark'],
    ['\\p{Currency_Symbol}', 'Currency'],
    ['(?=[\\p{Emoji}])[\\D]', 'Emoji'],
    ['\\p{ASCII}', 'ASCII'],
    ['\\p{sc=Latin}', 'Latin'],
    ['\\p{sc=Han}', 'CJK (Chinese, Japanese and Korean)'],
    ['\\p{sc=Hiragana}', 'Japanese Hiragana 平假名'],
    ['\\p{sc=Katakana}', 'Japanese Katakana 片假名'],
    ['\\p{sc=Hang}', 'Korean'],
    ['\\p{sc=Arabic}', 'Arabic'],
    ['\\p{sc=Cyrillic}', 'Cyrillic'],
    ['\\p{sc=Greek}', 'Greek'],
    ['\\p{sc=Hebrew}', 'Hebrew'],
    ['\\p{sc=Myanmar}', 'Myanmar'],
    ['\\p{sc=Thai}', 'Thai'],
  ];

  const outputArray = [];
  const initText = 'A better world designed and made for all';
  const [text, setText] = React.useState(initText);
  const [sampleSelect, setSampleSelect] = React.useState(initText);

  regExpArray.forEach((regexp) => {
    const ret = text.match(new RegExp(regexp[0], 'ugs'));
    outputArray.push({ regexp, ret });
  });

  return (
    <div className="App">
      <div>
        <div>
          <textarea
            className="textarea"
            placeholder="Enter text here"
            type="text"
            value={text}
            onChange={(e) => { setText(e.target.value); }}
          />
        </div>
        <div>
          Sample text:
          <select
            value={sampleSelect}
            aria-label="Default select example"
            onChange={(e) => {
              setSampleSelect(e.target.value);
              setText(e.target.value);
            }}
          >
            {sampleText.map((item) => (
              <option value={item.text}>{`${item.language} : ${item.text}`}</option>
            ))}
          </select>
        </div>
      </div>
      <table className="table table-striped table-bordered">
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
      <div>
        Useful links
        <div>
          <a href="https://util.unicode.org/UnicodeJsps/character.jsp">Unicode Utilities: Character Properties</a>
        </div>
        <div>
          <a href="https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp">Unicode Utilities: UnicodeSet</a>
        </div>
        <div>
          <a href="https://regex101.com/">Regular Expression online tester</a>
        </div>
      </div>
    </div>
  );
}

export default App;

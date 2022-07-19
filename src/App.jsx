import React from 'react';
import './App.css';

function App() {
  const initText = 'a中国b💩Poo😇🥰😍es😀😃😊✂🪰1231Привет旧統一教会の元牧師が明かす“献金ノルマ”“政治とのつなが$2, ₿€1, ¥9어떻게 도와드릴까요oogle. يمكنك تغيير لغة العرض إلى لغتك المفضّلة في أي وقت.préférée dans vos  à jour les paramè języka używanego w usłπεριορισμό κυριαρχίαςעה פוליטית או דעה בבעיות אחר สระและเสมอภาคกันในเกีย';

  const regExpArray = [
    '.',
    '\\p{Letter}',
    '\\p{Number}',
    '\\p{ASCII}',
    '\\p{Emoji}',
    '(?=[\\p{Emoji}])[^\\d]',
    // '\\p{Basic-Emoji}',
    // '\\p{Emoji_Presentation}',
    '\\p{sc=Han}',
    '\\p{sc=Hang}',
    '\\p{sc=Hiragana}',
    '\\p{sc=Katakana}',
    '\\p{sc=Cyrillic}',
    '\\p{sc=Arabic}',
    '\\p{sc=Latin}',
    '\\p{sc=Greek}',
    '\\p{sc=Hebrew}',
    '\\p{sc=Thai}',
    '\\p{Currency_Symbol}',
  ];

  const outputArray = [];
  const [text, setText] = React.useState(initText);

  regExpArray.forEach((regexp) => {
    // console.log(`Regular expression: ${item}`);
    const ret = text.match(new RegExp(regexp, 'ugs'));
    // if (ret) {
    //   console.log(ret);
    //   // console.log(`<${ret.join('-')}>`);
    // } else {
    //   console.log('No matches found');
    // }
    outputArray.push({ regexp, ret });
  });

  return (
    <div className="App">
      <p>Hello world</p>
      <textarea
        className="textarea"
        placeholder="Enter or paste text here"
        type="textarea"
        value={text}
        onChange={(e) => { setText(e.target.value); }}
      />
      <table>
        <thead>
          <tr>
            <th scope="col">RegExp</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          {
              outputArray.map((item) => (
                <tr key={item.regexp}>
                  <td>{item.regexp}</td>
                  <td>{item.ret}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  );
}

export default App;

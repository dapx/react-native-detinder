import React, { Component } from 'react';
import {
  Text,
  View,
  Slider
} from 'react-native';
import { Button } from 'react-native-elements';

let questions = [
  {
    'id': 0,
    'question': 'A cor do cabelo era escuro?',
    'answers': [
      { 'id': 0, text: 'sim', next: 1},
      { 'id': 1, text: 'nao', next: 2}
  ]
  },
  {
    'id': 1,
    'question': 'Qual era a cor do cabelo claro?',
    'answers': [
      {'id': 0, text: 'preto', next: 99},
      {'id': 1, text: 'marrom', next: 99},
      {'id': 2, text: 'loiro escuro', next: 99}
    ]
  },
  {
    'id': 3,
    'question': 'Qual era a cor do cabelo claro?',
    'answers': [
      {'id': 0, text: 'branco', next: 99},
      {'id': 1, text: 'loiro', next: 99},
      {'id': 2, text: 'outro', next: 99}
    ]
  }
]

export default class Perguntas extends Component {

  constructor(props){
    super(props);
    this.state = {
      questionList: questions,
      question_id: 0
    };
  }

  render(){
      return (
        <View>
          <Text>{ this.state.questionList[this.state.question_id].question }</Text>
          <View>
          {this.renderAnswers(this.state.questionList[this.state.question_id])}
          </View>
        </View>
      );
    }


  renderAnswers(question){
    return question.answers.map((answer) => {
      return (
        <Button
          raised
          icon={{name: 'pageview'}}
          title={answer.text}
          onPress={() => this.nextQuestion(answer.next) }
        />
      );
    });
  }

  nextQuestion(id){
    if (id === 99){
      this.props.navigator.push(this.props.routes[3]);
    } else {
      this.setState({
      question_id: id,
      });
    }
  }

}

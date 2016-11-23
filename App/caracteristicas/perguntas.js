import React, { Component } from 'react';
import {
  Text,
  View,
  Slider
} from 'react-native';
import { Button } from 'react-native-elements';

import * as api from '../api';

export default class Perguntas extends Component {

  constructor(props){
    super(props);
    this.state = {
      detento: this.props.detento,
      questionList: null,
      question_id: 0
    };
    console.log("Detento: " + this.props.detento);
  }

  componentWillMount(){
    api.fetchQuestions().then((result) => {
      console.log(result);
      this.setState({ questionList: result });
    });
  }

  render(){
    return (
      <View>
      { this.state.questionList
        ? (
          <View>
            <Text style={{textAlign: 'center', fontSize: 18 }}>{ this.state.questionList[this.state.question_id].question }</Text>
            <View>
            {this.renderAnswers(this.state.questionList[this.state.question_id])}
            </View>
          </View>
          )
      :   (
          <View><Text>Não foi possivel conectar no servidor</Text></View>
        )
      }
    </View>
  );
}

  renderAnswers(question){
    return question.answers.map((answer, id) => {
      return (
        <Button
          raised
          icon={{name: 'pageview'}}
          backgroundColor='green'
          title={answer.text}
          key={id}
          onPress={() => this.nextQuestion(answer.next, question.char, answer.text) }
        />
      );
    });
  }

  nextQuestion(id, chave, valor){
    {chave
      ? (this.setState({detento: api.defineDetento(chave, valor)}))
      : (console.log("Pergunta sem characteristica"))
    }
    { id === 99
      ? (
        console.log('envia POST com objeto para retornar os detentos'),
        this.props.navigator.push(this.props.routes[3])
      )
      : (
      this.setState({
      question_id: id,
      }))
    }
  }

}

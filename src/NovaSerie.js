import React, { Component } from 'react'
import api from './Api'
import { Redirect } from 'react-router-dom'

const statusEnum = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class NovaSerie extends Component{
    constructor(props){
        super(props)
        this.state = {
          genres: [],
          isLoading: false,
          redirect: false
        }

        this.salvar = this.salvar.bind(this)
    }

    componentDidMount(){
        this.setState({ isLoading: true })
        
        api.loadGenres()
            .then((res) => {
            this.setState({
                isLoading: false,
                genres: res.data
            })
        })
    }

    salvar(){
        const newSeries = {
            name: this.refs.nome.value,
            status: this.refs.status.value,
            genre: this.refs.genero.value,
            comments: this.refs.comentario.value
        }
        
        api.saveSeries(newSeries)
            .then((res) => {
                this.setState({ 
                    redirect: '/series/'+this.refs.genero.value 
                })
            })
    }

    render(){
        return (
            <section className="intro-section">
                {  
                    this.state.redirect && 
                    <Redirect to={this.state.redirect} />
                }
                <h1>Nova Série</h1>
                <form>
                    Nome: <input type="text" ref='nome' className="form-control" /> <br />
                    Status: 
                    <select ref='status'>
                        { Object
                            .keys(statusEnum)
                            .map(key => <option key={key} value={key}>{statusEnum[key]}</option>)
                        }
                    </select> <br />
                    Gênero: 
                    <select ref='genero'>
                        { this.state.genres
                            .map(key => <option key={key} value={key}>{key}</option>)
                        }
                    </select> <br />
                    Comentários: <textarea ref='comentario' className="form-control" ></textarea> <br />
                    <button type='button' onClick={this.salvar}>Salvar</button>
                </form>
            </section>
        )
    }
}

export default NovaSerie
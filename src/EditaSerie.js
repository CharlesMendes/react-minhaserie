import React, { Component } from 'react'
import api from './Api'
import { Redirect } from 'react-router-dom'

const statusEnum = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class EditaSerie extends Component{
    constructor(props){
        super(props)
        this.state = {
          genres: [],
          isLoading: false,
          redirect: false,
          serie: {}
        }

        this.salvar = this.salvar.bind(this)
    }

    componentDidMount(){
        this.setState({ isLoading: true })

        api.loadSeriesById(this.props.match.params.id)
            .then((res) => {
                this.setState({
                    serie: res.data
                })
                this.refs.nome.value = this.state.serie.name
                this.refs.comentario.value = this.state.serie.comments
                this.refs.genero.value = this.state.serie.genre
                this.refs.status.value = this.state.serie.status
            })
        
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
            id: this.props.match.params.id,
            name: this.refs.nome.value,
            status: this.refs.status.value,
            genre: this.refs.genero.value,
            comments: this.refs.comentario.value
        }
        
        api.updateSeries(newSeries)
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
                <h1>Editar Série</h1>
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
                    Comentários: <textarea defaultValue={this.state.serie.name} ref='comentario' className="form-control" ></textarea> <br />
                    <button type='button' onClick={this.salvar}>Salvar</button>
                </form>
            </section>
        )
    }
}

export default EditaSerie
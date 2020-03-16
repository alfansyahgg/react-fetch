import React from 'react';
import '../../App.css';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      nama: [],
      inputNama: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.tambahNama = this.tambahNama.bind(this);
    this.getNamaSiswa = this.getNamaSiswa.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  tambahNama(e){
    e.preventDefault();
    
    let dataNama = new URLSearchParams();
    dataNama.append('inputNama',this.state.inputNama);
    fetch('http://localhost/api-react/inputnama.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: dataNama
    })
    .then(response => {
        response.text().then(function(text){
        console.log(text)
      })
      this.getNamaSiswa()
    })

    this.setState({inputNama: ''})
  }

  getNamaSiswa(){
    fetch('http://localhost/api-react/getnamaSiswa.php')
    .then(res =>{
      return res.json()
    })
    .then(res => {
      const cpNama = this.state.nama.slice(0);
      let listSiswa = res.result.map((val,ind) => {
        return(
          <tr key={ind}>
            <td style={{border: "1px solid black"}}>{ind + 1}</td>
            <td style={{border: "1px solid black"}}>{val.nama}</td>
            <td style={{border: "1px solid black",width: "15%"}}>
            <button className="btn btn-danger" onClick={(e) => {this.deleteList(e,val.id)}}>Delete</button>
            </td>
          </tr>
        )
      })
      this.setState({nama: listSiswa})
    })
  }

  editNamaSiswa(e,id){
    let siswa = new URLSearchParams();
    siswa.append('id',id);
    fetch('http://localhost/api-react/editnamaSiswa.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: siswa
    })
    .then(response => {
      response.text().then(function(text){
        console.log(text);
      })
      this.getNamaSiswa();
    })
  }

  deleteList(e,id){
    let siswa = new URLSearchParams();
    siswa.append('id',id);
    fetch('http://localhost/api-react/deletenamaSiswa.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: siswa
    })
    .then(response => {
        response.text().then(function(text){
        console.log(text)
      })
      this.getNamaSiswa();
    })
  }

  handleChange(e){
    const target = e.target;
    const value = target.name == 'inputNama' ? target.value : 'Lorem';
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  componentDidMount(){
    this.getNamaSiswa();
  }

  render(){
    return(
      <div className="container">
        <table className="table table-bordered table-striped" style={{borderCollapse: "collapse",border: "1px solid black"}}>
          <thead>
            <tr>
            <th style={{border: "1px solid black"}}>No</th>
            <th style={{border: "1px solid black"}}>Nama</th>
            <th style={{border: "1px solid black"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.nama}
          </tbody>
        </table>
        Tambah Siswa
        <form onSubmit={this.tambahNama}>
          <input type="text" name="inputNama" onChange={this.handleChange} value={this.state.inputNama}/>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default HomePage;

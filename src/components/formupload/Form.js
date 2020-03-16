import React, {Component} from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedImg: []
        }
    }

  pilihGambar(e){
      const gmbr = e.target.files;
      const arrimg = [];
      for(var i = 0;i< gmbr.length;i++){
          arrimg.push(gmbr[i]);
      }
      this.setState({selectedImg: arrimg});
  }  

  uploadGambar(e){
      e.preventDefault()
      const formData = new FormData();
      for(var i = 0; i < this.state.selectedImg.length; i++){
        formData.append('gmbr[]',this.state.selectedImg[i]);
      }
      fetch('http://localhost/api-react/uploadgmbr.php',{
          method: 'POST',
          body: formData
      }
      )
      .then(response => {
          return response.text();
      })
      .then(response => {
          console.log(response);
          window.location.reload();
      })
  }

  render(){
    return (
    <div>
        <div className="container">
          <div className="jumbotron">
            <h1>Form Page</h1>

            <form>
                <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Gambar</label>
                <input multiple onChange={this.pilihGambar.bind(this)} name="gmbrSiswa" type="file" className="form-control-file" id="gmbrPilih" />
                </div>

                <div className="form-group">
                    <button id="btnUpload" className="btn btn-primary" onClick={this.uploadGambar.bind(this)}>Upload</button>
                </div>
            </form>
          </div>
        </div>
        </div>)
  }
}

export default Form;
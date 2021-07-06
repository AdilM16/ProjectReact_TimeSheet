import React, { Component } from 'react'


export default class Form extends Component {
    state = {
        date: new Date()
    }
    onChange = date => {
        this.setState({
            date: date
        })
    }
    ftg = () => {
        let form=document.getElementsByClassName("ntm")[0];
        form.classList.toggle("displayno");
        form.classList.toggle("tresflex") ;
    }


    ok = () => {
        let form = document.getElementsByClassName("ntm")[0];
        let valuenom = document.getElementsByClassName("myNom")[0];
        let valueDate = document.getElementsByClassName("myDate")[0];
        let valueHeureDebut = document.getElementsByClassName("myHeureDebut")[0];
        let valueHeureFin = document.getElementsByClassName("myHeureFin")[0];
        let newRow = document.createElement("div");
        let col2 = document.createElement("div");
        let col3 = document.createElement("div");
        let col4 = document.createElement("div");
        let col5 = document.createElement("div");
        let parent = document.getElementsByClassName('parent')[0];
        if (valuenom.value == '' || valueHeureDebut.value == ''||valueHeureFin.value =='' || valueDate.value == '') {
            return Form
        }
        form.classList.toggle("displayno");
        form.classList.toggle("tresflex");
        newRow.classList.add("row", "bgTimeSheet");
        col2.classList.add("col");
        col2.textContent = valuenom.value;
        col3.classList.add("col");
        col3.textContent = valueDate.value;
        col4.classList.add("col");
        col4.textContent = valueHeureDebut.value;
        col5.classList.add("col");
        col5.textContent = valueHeureFin.value;
        newRow.append(col2, col3, col4, col5);

        parent.append(newRow);
        console.log(parent);
        console.log(newRow);
        valueDate.value = "";
        valueHeureDebut.value = "";
        valuenom.value = "";
        valueHeureFin.value = "";

    }
    render() {
        return (
            <div className='my-5'>
               
                <div className="ntm blur displayno justify-content-center flex-column" >
                    <button className='clear' onClick={this.ftg}>X</button>
                    <label>Nom Tâche :</label>
                    <input placeholder="Nom" className="myInput myNom"></input>
                    <label>Date:</label>
                    <input placeholder="Date" type="date" className="myInput myDate"></input>
                    <label>heure debut:</label>
                    <input placeholder="20h00" type="time" className="myInput myHeureDebut"></input>
                    <label>heure fin :</label>
                    <input placeholder="21h00" type="time" className="myInput myHeureFin"></input>
                    <div className="d-flex justify-content-center w-50">
                        <button className="ok btn-grad my-3" onClick={this.ok}>ok</button>
                    </div>
                </div>
            </div>
        )
    }
}

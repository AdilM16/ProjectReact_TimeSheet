import React, { Component } from 'react'
import './TimeSheet.css'
export default class TimeSheet extends Component {
    render() {

        return (
            <div className='bgTimeSheet'>

                <div className="row">
                    <div className="col text-center">
                        Nom
                    </div>
                    <div className="col text-center">
                        Date
                    </div>
                    <div className="col text-center">
                        Heure Debut
                    </div>
                    <div className="col text-center">
                        Heure Fin
                    </div>
                </div>

            </div>
        )
    }
}

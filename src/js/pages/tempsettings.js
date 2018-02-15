import React from "react"
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class InputBox extends React.Component {
    state = {
         selectedOptionMonth: { value: '0', label: 'Январь' },
         selectedOptionYear: { value: '0', label: '1980' },
     }
     handleChangeMonth = (selectedOptionMonth) => {
         this.setState({ selectedOptionMonth });
     }
     handleChangeYear= (selectedOptionYear) => {
         this.setState({ selectedOptionYear });
     }
    render() {
         const year = [
             { value: '0', label: '1980' },
             { value: '1', label: '1981' },
             { value: '2', label: '1982' },
             { value: '3', label: '1983' },
             { value: '4', label: '1984' },
             { value: '5', label: '1985' },
             { value: '6', label: '1986' },
             { value: '7', label: '1987' },
             { value: '8', label: '1988' },
             { value: '9', label: '1989' },
             { value: '10', label: '1990' },
             { value: '11', label: '1991' },

         ];
         const month = [
             { value: '0', label: 'Январь' },
             { value: '1', label: 'Февраль' },
             { value: '2', label: 'Март' },
             { value: '3', label: 'Апрель' },
             { value: '4', label: 'Май' },
             { value: '5', label: 'Июнь' },
             { value: '6', label: 'Июль' },
             { value: '7', label: 'Август' },
             { value: '8', label: 'Сентябрь' },
             { value: '9', label: 'Октябрь' },
             { value: '10', label: 'Ноябрь' },
             { value: '11', label: 'Декабрь' },

         ];

        let userInputType;
        if(this.props.isAvatar){
            userInputType=(
                <div class="addAvatar">
                    <div class="addAvatar__button"></div>
                </div>
            );
        }else if(this.props.isBirth){

             const { selectedOptionMonth } = this.state;
             const valueMonth = selectedOptionMonth && selectedOptionMonth.value;
             const { selectedOptionYear } = this.state;
             const valueYear = selectedOptionYear && selectedOptionYear.value;

            userInputType=(
                <div class="dateBirth">
                    <div class="dateBirth__box dateBirth__box--month">
                        <div class="select">
                            <Select options={month}  value={valueMonth} onChange={this.handleChangeMonth}></Select>
                        </div>


                    </div>
                    <div class="dateBirth__box dateBirth__box--day">
                        <input class="inputText" type="text" style={{height:'36px'}}/>
                    </div>
                    <div class="dateBirth__box dateBirth__box--year">

                        <div class="select">
                            <Select options={year}  value={valueYear} onChange={this.handleChangeYear}></Select>
                        </div>

                    </div>
                </div>
            );
        }
        else{
            userInputType=(
                <input class="inputText" type="text" />
            );
        }
        return (
            <div class={'setProfile__box'} >
                <div class="setProfile__info"><span>{this.props.name}</span></div>
                <div class="setProfile__value">
                    {userInputType}
                </div>
            </div>

        );
    }
}
import React from 'react';
import axios from 'axios';
import {Date} from '../../components/date/date.component'
import './TravelItenary.style.css'
import {Heading} from '../../components/heading/heading'
import {CheckBox} from '../../components/checkbox/checkbox.component'
import {Text}  from '../../components/Text/text.component'
import  {DropDown} from '../../components/DropDown/dropDown.component'
import {AddressBox} from '../../components/AddressTextBox/text.component'
import {SubHeading} from '../../components/sub-heading/sub-heading'
import { Upload } from '../../components/UploadFile/uploadfile.component';
import {FileContainer} from '../../components/FileContainer/fileContainer.component';
import {Comment} from   '../../components/Comments/comment.component'
import {Button} from '../../components/Button/button.component'
class TravelItenary extends React.Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
        this.state = {
            spouse: false,
            children: false,
            accomodationReq : false,
            typeofTravel:'International',
            tofVisa: 'L-1 Visa',
            ccount: 0,
            from: 'Chennai',
            to: 'Dallas',
            startDate: '',
            endDate: '',
            findUrl: '',
            info: {
                title:"",
                surnameAsPerPassport:"",
                nameAsPerPassport:"",
                dob:"",
                passportNumber:625,
                visaNumber: 520
            },
            sinfo: {
                title:"",
                surnameAsPerPassport:"",
                nameAsPerPassport:"",
                dob:"",
                passportNumber:625,
                visaNumber: 520
            },
            cinfo: [

            ],
            comments:'',
            address:'',
            iName:'',
            relationShip:'Surname',
            address:'',
            laddress:'',
            purposeofstay:'InterCompanyTransfer',
            Files :  {
                findUrlmanager: "",
                uploadvisamanager: '',
                uploadpassportmanager: ''
                }
        }
    }

    handleChange = (a, b) => {
        console.log(b)
        if(!b){
            this.setState({[a]: b,ccount:0}, () => console.log(this.state))
            //document.querySelector('drop').value =0;
            this.inputRef.current.value =0;
        }
        
        else
            this.setState({[a]: b}, () => console.log(this.state))
    }

    addChildAccordingToIndex = (a,b,i) => {
        const myArray = this.state.cinfo;
        console.log('sdfssed'+i);
        myArray[i][a]=b;
        this.setState({cinfo:myArray});
    }

    myfunction = (e,a) =>{
        e.preventDefault();
       const ab=  document.getElementById(a);
       ab.click();
    }

    dropDownChange = (a,b) => {
        this.setState({[a]:b})
    }

    createObjectsOfGivenCount = (a,b) => {

        const myCount = this.state.ccount;
       const myArray = this.state.cinfo;
        if(myCount === 0 ){
            while(myArray.length < b){
                myArray.push({});
            }
        }
        else if(b>myCount){
            let pushTimes = b-this.state.ccount
            while(pushTimes!==0){
                myArray.push({});
                pushTimes = pushTimes -1;
            }
        }
        else if(b<=myCount){
            let  popTimes = myCount-b;
            while(popTimes!==0){
                myArray.pop();
                popTimes = popTimes - 1;
            } 
        }
        this.setState({[a]:b,cinfo:myArray});

    }

    componentDidMount(){
        console.log('ref',this.inputRef)
    }

    Print = () => {
        console.log(this.state);
        axios.post('http://localhost:1234/api/form', this.state)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    readFileName = (V,A)=>{
        const filename = A.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
        const Filess = this.state.Files;
        this.setState(prevState => ({
            Files:{
                ...prevState.Files,
                [V]:filename
            }

        }))
    }
    personalInformation = (a,b) => {

        const info = this.state.info;
        this.setState((prevState) => (
            {
                info: {
                    ...prevState.info,
                    [a]:b
                }
            }
        ))
    }

    spersonalInformation = (a,b) => {

        const info = this.state.info;
        this.setState((prevState) => (
            {
                info: {
                    ...prevState.info,
                    [a]:b
                }
            }
        ))
    }

        render = () => (
            <div className ='myPortal'>
                <br/><br/>
<form className='form'>
<Heading name = 'New Travel Request' size = '20px'/>
<SubHeading label ='TRAVEL ITERNARY'/>
 <div className='MainTravel'>
     <div className='Box'>
    <div className='Travel row1'>
                <DropDown DropDownChange={this.dropDownChange} obj = 'typeofTravel' label ='Type of Travel' list={['International','Domestic']}/>
                <DropDown  DropDownChange = {this.dropDownChange} obj='tofVisa' label ='Type of Visa' list={['L-1 Visa','TN Visa','H-1B Visa','Green Card']}/>
                <CheckBox name='spouse' handleChange ={this.handleChange} val={this.state.spouse}  label='Spouse'/>
                <CheckBox name='children' handleChange ={this.handleChange} val={this.state.children}  label='Children'/>
                <DropDown refs={this.inputRef} DropDownChange={this.createObjectsOfGivenCount} obj ='ccount' label ='Children Count ' list={[0,1,2,3,4,5,6]}/>
    </div>
    <div className='Travel row2'>
    <DropDown DropDownChange={this.dropDownChange} obj='from' label ='From' list={['Chennai','Bangalore','Dallas']}/>
    <DropDown  DropDownChange={this.dropDownChange} obj='to' label ='To' list={['Dallas','Chennai','Bangalore']}/>
    <Date DropDownChange={this.dropDownChange} obj ='startDate'label='Journey Start Date'/>

    <Date DropDownChange={this.dropDownChange} obj ='endDate' label='Journey End Date'/>
    </div>
    <div className='Travel row3'>
    <CheckBox  name='accomodationReq' handleChange ={this.handleChange} val={this.state.accomodationReq}  label='Accomodation Required'/>
        <Upload   handleFlow = {this.readFileName}  myfunction = {this.myfunction} obj='findUrl' filePurpose='manager' DropDownChange={this.dropDownChange}label='Find Url'/>
    </div>
    <SubHeading label ='PERSONAL INFORMATION (SELF)'/>
    <div className='Travel row4'>
        <Text  obj='title' DropDownChange={this.personalInformation}label='Title'/>
        <Text obj='surnameAsPerPassport' DropDownChange={this.personalInformation}label='Surname as Per Passport'/>
        <Text  obj='nameAsPerPassport' DropDownChange={this.personalInformation}label='Given Name as Per Passport'/>
        <Date obj='dob' DropDownChange={this.personalInformation} label='Date of Birth(As per passport)'/>
    </div>
    <div className='Travel row5'>
    <Text obj='passportNumber' DropDownChange={this.personalInformation} label='Passport Number'/>
    <Text obj='visaNumber' DropDownChange={this.personalInformation} label='Visa Number'/>
    <AddressBox obj='address' DropDownChange={this.dropDownChange} label='Communication Address With Pincode'/>

    </div>
    { this.state.spouse === false? '':
    <div>
        <SubHeading label ='SPOUSE INFORMATION'/>
        <div  className='Travel row6'>

            <Text obj='title' DropDownChange={this.spersonalInformation}label='Title'/>
            <Text obj='surnameAsPerPassport' DropDownChange={this.spersonalInformation}label='Surname as Per Passport'/>
            <Text obj='nameAsPerPassport' DropDownChange={this.spersonalInformation}label='Given Name as Per Passport'/>
            <Date obj='dob' DropDownChange={this.spersonalInformation} label='Date of Birth(As per passport)'/>
        </div>
        <div className='Travel row7'>
            <Text obj='passportNumber' DropDownChange={this.spersonalInformation} label='Passport Number'/>
            <Text obj='visaNumber' DropDownChange={this.spersonalInformation} label='Visa Number'/>
        </div>
    </div>
    }
    {
        this.state.children === false? '':
        <div > 
           {Array(parseInt(this.state.ccount,10)).fill(1).map((x, i) =>

<div key={i}>
<SubHeading label = {"Child" +(i+1)}/>
            
            <div  className='Travel'>

            <Text index = {i} obj={'title'} DropDownChange={this.addChildAccordingToIndex}label='Title'/>
            <Text index = {i}obj={'surnameAsPerPassport'} DropDownChange={this.addChildAccordingToIndex}label='Surname as Per Passport'/>
            <Text index = {i} obj={'nameAsPerPassport'} DropDownChange={this.addChildAccordingToIndex}label='Given Name as Per Passport'/>
            <Date index = {i} obj={'dob'}  DropDownChange={this.addChildAccordingToIndex} label='Date of Birth(As per passport)'/>
        </div>
        <div className='Travel'>
            <Text index = {i} obj={'passportNumber'} DropDownChange={this.addChildAccordingToIndex} label='Passport Number'/>
            <Text index = {i} obj={'visaNumber'} DropDownChange={this.addChildAccordingToIndex} label='Visa Number'/>
        </div> 
        </div>

  )}
        </div>
    }
        <SubHeading label ='NOMINEE INFORMATION (FOR INSURANCE)'/>

    <div className='Travel'>

    <Text obj='iName' DropDownChange={this.dropDownChange} label='Name'/>
    <DropDown  DropDownChange = {this.dropDownChange} obj='relationShip' label ='Relationship' list={['SurName','Brother','Sister']}/>


    </div>

    <SubHeading label ='HOTEL BOOKING INFORMATION'/>
<div className='Travel row10'>
<AddressBox obj='laddress' DropDownChange={this.dropDownChange} label='Location of Stay (Complete Address'/>
<DropDown  DropDownChange = {this.dropDownChange} obj='purposeofstay' label ='Purpose of Stay' list={['Inter Company transfer', 'Inter Staff Exchange']}/>
</div>
</div>
<div className='Travel'>
<SubHeading label ='ATTACHMENTS'/>
<span style={{
    marginTop: '25px',
    fontFamily: 'Lato',
    fontWeight: 300,
    fontStyle:'italic',
    marginLeft: '4px',
    fontSize:'12px'
}}> {" "} (Documents should be either jpeg/ png/pdf, 50kb-1mb) </span>
</div>
<div className ='Travel boxe'>
        <div className='Travel '>
            <Upload  handleFlow = {this.readFileName}  myfunction = {this.myfunction} obj=' ' filePurpose='manager' DropDownChange={this.dropDownChange}label='Upload Visa Copy'/>
            <Upload handleFlow = {this.readFileName}  myfunction = {this.myfunction} obj='uploadpassport' filePurpose='manager' DropDownChange={this.dropDownChange}label='Upload Passport Copy'/>

            
        </div>
        <div className='file-cointainer'>
            {
                Object.entries(this.state.Files).map((t,k)=>{
                    
                    {
                        const a= t[1]!== '' ? ( <FileContainer key={k} value={t[0]} name={t[1]}/>) : ''
                        return a;
                    }
                })
            }
        </div>
</div>


<SubHeading label ='Add Comments'/>
<div className='Travel comment'>
<Comment obj='comments' DropDownChange={this.dropDownChange} label='' holder='add comments here..'/>
</div>


<br/><br/>

</div>
</form>
<br/><br/>
<div className='button-style'>
    <Button color='blue' label='Submit' Print = {this.Print} />
    <Button  label='Cancel'/>
</div>
</div>

        )
}

export { TravelItenary };

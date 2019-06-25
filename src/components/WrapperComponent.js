import {connect} from 'react-redux';
import Liststudents from './liststudents';
import addStudent from './addstudents';
import {bindActionCreators} from 'redux'
import {Addstudentslist} from '../redux/actions'
import {removeStudents} from '../redux/actions'
import {SearchStudents} from '../redux/actions'

function mapStateToProps(state){
    return {students:state}
}

function mapStateToPropsadd(dispatch){

    return bindActionCreators ({Addstudentslist},dispatch)

}

function mapStateToPropsremove(dispatch){

    return bindActionCreators ({removeStudents,SearchStudents},dispatch)

}

export const ViewStudentsWrapper = connect(mapStateToProps,mapStateToPropsremove)(Liststudents)
export const AddStudentsWrapper = connect(mapStateToProps,mapStateToPropsadd)(addStudent)
import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error:null,
            errorInfo:null
        }
    }

    componentDidCatch(err, errInfo){
        this.setState({
            error:err,
            errorInfo:errInfo
        })
    }

    render(){
        return(
            <>
            {
                this.state.error ? 
                <div>
                <summary>It seems an error has occured in this application. Go back to the homepage or
                wait for a resolution.
                </summary>
                <details>
                    {this.state.componentErrInfo}
                </details>
            </div>
            :
            this.props.children
            }
            </>
        )   
    }
}

export default ErrorBoundary
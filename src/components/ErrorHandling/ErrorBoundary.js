//write code for specific errors, don't write generic error handling code
//This is a sample, so its fine here.

import { Component } from "react";
import Card from "../UI/Card";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error) {
        console.log('ErrorBoundary caught an error:', error);
    }
    render() {
        if (this.state.hasError) {
            return (
                <Card>
                    <h1>Error Boundary</h1>
                    <h2>I'm a noob developer, therefore I haven't added error handling for specific errors</h2>
                    <h2>When I become pro developer, I'll add different fallback UI for different errors</h2>
                </Card>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
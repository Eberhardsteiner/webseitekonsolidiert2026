import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { ROUTES } from '../constants/paths';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Etwas ist schiefgelaufen
            </h1>
            <p className="text-base text-gray-600 mb-6">
              Entschuldigung, es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es später erneut.
            </p>
            {this.state.error && process.env.NODE_ENV === 'development' && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 mb-2">
                  Fehlerdetails (nur in Entwicklung)
                </summary>
                <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 text-base bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Seite neu laden
              </button>
              <Link
                to={ROUTES.HOME}
                className="px-4 py-2 text-base bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Zur Startseite
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

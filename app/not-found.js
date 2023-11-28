import Image from "next/image";
import Link from 'next/link';

export default function NotFound() {
    const errorPage = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        paddingBottom: '0',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif',
        height: '100%',
        overflow: 'hidden'
    };

    const error404 = {
        width: '60%',
        height: 'auto',
        margin: '15px'
    };

    const Text = {
        color: 'gray'
    };

    const ReturnButton = {
        color: 'black',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        background: 'rgb(127 87 52)',
        fontWeight: '600'
    };

    return (
        <div style={errorPage}>
            <title>Portfolio Website Template | Not Found | 404</title>
            <Image style={error404} src="/ErrorsPages/404.svg" alt="404" width={1414.4} height={861.44} />
            <h2>Not Found | 404</h2>
            <p style={Text}>Could not find the requested resource</p>
            <Link href="/" style={ReturnButton}>Return Home</Link>
        </div>
    );
}
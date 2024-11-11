import { usePage } from "@inertiajs/react";

export default function ApplicationLogo(props) {
    const settings = usePage().props.settings;
    return (
        <img {...props} src={settings.logo_src != null ? '/storage/images/'+settings.logo_src : '/storage/images/alpagu.webp'} alt={'Logo'} className="application-logo" />
    );
}

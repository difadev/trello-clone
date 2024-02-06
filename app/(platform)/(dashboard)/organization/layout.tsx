import {Sidebar} from "../_components/sidebar";
import {OrgControl} from "./[organizationId]/_components/org-control";

const OrganizationLayout = ({
                                children
                            }: {children: React.ReactNode}) => {
    return (
        <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl">
            <div className="flex gap-x-7">
                <div className="w-64 shrink-0 hidden md:block">
                    {/* Sidebar */}
                    <Sidebar/>
                </div>
                <OrgControl/>
                {children}
            </div>
        </main>
    )
}

export default  OrganizationLayout;
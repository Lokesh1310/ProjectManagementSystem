import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons"; // Ensure this import is included
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/Redux/Store";
import { fetchProjects, searchProjects } from "@/Redux/project/Action";

export const tags = [
    "all", "react", "nodejs", "springboot", "mysql", "mongodb", "python", "reactNative"
];


const ProjectList = () => {
    const dispatch=useDispatch();
    const {project}=useSelector(store=>store)
    const [keyword, setKeyword] = useState(""); // Moved useState inside the component

    const handleSearchChange = (e) => {

        
        setKeyword(e.target.value);
        dispatch(searchProjects(e.target.value))
    };

    const handlerFilterCategory = (value) => {
        if(value=="all")
        dispatch(fetchProjects({}))
    else 
    dispatch(fetchProjects({category:value}))
    };
    const handlerFilterTags = (value) => {
        if(value=="all")
            dispatch(fetchProjects({}))
        else 
        dispatch(fetchProjects({tag:value}))
    };

    console.log("----",project)
    return (
        <div className='relative flex gap-5 py-5 justify-start'>
            <section className="filtersection">
                <Card className='p-5 sticky top-10'>
                    <div className='flex justify-between lg:w-[20rem]'>
                        <p className='text-xl -tracking-wider'>Filters</p>
                        <Button variant='ghost' size='icon'>
                            <MixerHorizontalIcon />
                        </Button>
                    </div>
                    <CardContent className='mt-5'>
                        <ScrollArea className='space-y-7 h-[70vh] overflow-y-auto'>
                            <div>
                                <h1 className="pb-3 text-grey-400 border-b">Category</h1>
                                <div className="pt-5">
                                    <RadioGroup className="space-y-3 pt-5" defaultValue="all" onValueChange={(value) => handlerFilterCategory(value)}>
                                        <div>
                                            <RadioGroupItem value='all' id="r1" />
                                            <Label htmlFor="r1">All</Label>
                                        </div>
                                        <div>
                                            <RadioGroupItem value='FullStack' id="r2" />
                                            <Label htmlFor="r2">FullStack</Label>
                                        </div>
                                        <div>
                                            <RadioGroupItem value='Frontend' id="r3" />
                                            <Label htmlFor="r3">Frontend</Label>
                                        </div>
                                        <div>
                                            <RadioGroupItem value='Backend' id="r4" />
                                            <Label htmlFor="r4">Backend</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className="pt-9">
                                <h1 className="pb-3 text-grey-400 border-b">Tag</h1>
                                <div className="pt-5">
                                    <RadioGroup className="space-y-3 pt-5" defaultValue="all" onValueChange={(value) => handlerFilterTags(value)}>
                                        {tags.map((item) => (
                                            <div key={item} className="flex items-center gap-2 ">
                                                <RadioGroupItem value={item} id={`r1-${item}`} />
                                                <Label htmlFor={`r1-${item}`}>{item}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </section>

            <section className="projectListSection w-full lg:w-[48rem]">
                <div className="flex gap-2 items-center pb-5 justify-between">
                    <div className="relative p-0 w-full">
                        <Input 
                            onChange={handleSearchChange} 
                            placeholder="search project" 
                            className="40% px-9"
                        />
                        <MagnifyingGlassIcon className="absolute top-3 left-4" />
                    </div>
                </div>

                <div className="space-y-5 min-h-[74vh]">
                    {
                        keyword
                            ? project.searchProjects?.map((item,index) => (
                                  <ProjectCard item={item} key={item.id*index}/> 
                              ))
                            : project.projects.map((item) => (
                                <ProjectCard key={item.id} item={item} />// Render four project cards if no keyword
                              ))

                         
                    }
                </div>
            </section>
        </div>
    ); 
}

export default ProjectList;
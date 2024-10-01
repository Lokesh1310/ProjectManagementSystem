import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DialogClose } from "@/components/ui/dialog";
import { tags } from "./ProjectList";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { createProject } from "@/Redux/project/Action";

const CreateProjectForm = () => {

  const dispatch=useDispatch();
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "", // Keep this empty for placeholder to show
      tags: []
    }
  });

  const handleTagsChange=(newValue)=>{


    const currentTags=form.getValues("tags");

    const updatedTags=currentTags.includes(newValue)?
    currentTags.filter(tag=>tag!==newValue):
    [...currentTags,newValue];

    form.setValue("tags",updatedTags);
  }

  const onSubmit = (data) => {

    dispatch(createProject(data))
    console.log("create project data", data);
  };

  return (
    <div>
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Project name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Project description..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    value={field.value} // Bind the selected value
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Category" /> {/* Set placeholder here */}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FullStack">FullStack</SelectItem>
                      <SelectItem value="Frontend">Frontend</SelectItem>
                      <SelectItem value="Backend">Backend</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          
          
<FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    // value={field.value} // Bind the selected value

                    defaultValue="springboot"
                    onValueChange={(value) => {
                  
                        handleTagsChange(value)
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="tag" /> {/* Set placeholder here */}
                    </SelectTrigger>
                    <SelectContent>
                  { tags.map((item)=> <SelectItem key={item} value={item}>{item}</SelectItem>)  }
                
                    </SelectContent>
                  </Select>
                </FormControl>

                <div className="flex gap-1 flex-wrap">

                  { field.value.map((item)=> <div key={item} onClick={()=>handleTagsChange} className="cursor-pointer flex rounded-full 
                    items-center border gap-2 px-4 py-1"> 

                        <span className="text-sm">
                            {item}
                            <Cross1Icon className="h-3 w-3"/>
                        </span>
                    </div>)}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          



          <DialogClose>
          {false ? ( // Replace 'false' with your actual condition
            <div>
              <p>You can create only 3 projects with the free plan. Please upgrade your plan.</p>
            </div>
          ) : (
            <Button type="submit" className="w-full mt-5">
              Create Project
            </Button>
          )}
          
        </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
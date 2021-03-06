import {ExerciseExecution} from "./exercise-execution";
import {ExerciseType} from "./exercise-type";
import {ExerciseAttachment} from "./exerciseAttachments";
export class Exercise {

  public _id;

  public executions:ExerciseExecution[] = [];
  public attachments:ExerciseAttachment[] = [];
  public labels:string[] = [];
  public text:string;

  public type:string = ExerciseType.SimpleExercise;

  constructor(public title:string) {
  };
}

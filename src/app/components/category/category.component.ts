import { isEmptyExpression } from '@angular/compiler';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[];
  currentCategory: Category;
  dataLoaded = false;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
      this.dataLoaded=true;
    })
  }

  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  setCurrentCategoryToNull(){
    this.currentCategory = {categoryId:0,categoryName:'All'};
  }

  getCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(category:Category){
    if(this.currentCategory == null || category.categoryName == this.currentCategory.categoryName){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}

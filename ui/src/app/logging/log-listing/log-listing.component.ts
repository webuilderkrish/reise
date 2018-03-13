import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Page, Response } from "../../models/response.model";
import { Log } from "../../models/log.model";
import { FilterGroup } from "../../models/filter.model";

@Component({
    selector: 'app-log-listing',
    templateUrl: './log-listing.component.html',
    styleUrls: ['./log-listing.component.css']
})
export class LogListingComponent implements OnInit {

    public logs: Page<Log>;
    private filterGroup: FilterGroup;

    public constructor(private _HttpClient: HttpClient) { }

    public ngOnInit(): void {
        this.filterGroup = new FilterGroup();
    }

    public getLogs(search: HTMLInputElement, page: HTMLSelectElement): void {
        this.filterGroup.size = page.value;
        this.filterGroup.search = {
            title: "Search",
            filters: [{
                key: "url",
                value: search.value.trim()
            }]
        };
        this._HttpClient.post('/api/logs/all', this.filterGroup)
            .toPromise()
            .then((response: Response<Page<Log>>) => {
                if (response.status) {
                    this.logs = response.data;
                }
            })
            .catch((error: any) => {
                console.log(error);
            })
    }
}
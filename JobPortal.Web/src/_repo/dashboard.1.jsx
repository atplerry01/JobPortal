import React from 'react';

const Dashboard = () => (

    <div class="admin-container-wrapper">

        <div class="container">

            <div class="GridLex-gap-15-wrappper">

                <div class="GridLex-grid-noGutter-equalHeight">

                    <div class="GridLex-col-3_sm-4_xs-12">

                        <div class="admin-sidebar">

                            <div class="admin-user-item">

                                <div class="image">
                                    <img src="assets/images/avatar.png" alt="image" class="img-circle" />
                                </div>

                                <h4>Akinsanya Olanrewaju</h4>
                                <p class="user-role">Professional</p>

                            </div>


                            <ul class="admin-user-menu clearfix">
                                <li>
                                    <a href="#"><i class="fa fa-tachometer"></i> Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-user"></i> Profile</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-key"></i> Change Password</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-bell"></i> My Alert</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-bookmark"></i> Saved Jobs</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-pencil"></i> Resume Lists</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-sign-out"></i> Logout</a>
                                </li>
                            </ul>

                        </div>

                    </div>

                    <div class="GridLex-col-9_sm-8_xs-12">

                        <div class="admin-content-wrapper">

                            <div class="admin-section-title">

                                <h2>Profile</h2>
                                <p>Enquire explain another he in brandon enjoyed be service.</p>

                            </div>

                            <form class="post-form-wrapper">

                                <div class="row gap-20">

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group bootstrap-fileinput-style-01">
                                            <label>Photo</label>
                                            <div class="file-input file-input-ajax-new"><div class="file-preview ">
                                                <div class="close fileinput-remove">×</div>
                                                <div class=" file-drop-zone">
                                                    <div class="file-preview-thumbnails"><div class="file-preview-frame file-preview-initial" id="preview-1542634346405-init_0" data-fileindex="init_0">
                                                        <img src="images/man/01.jpg" class="file-preview-image" alt="The Moon" title="The Moon" />

                                                    </div>
                                                    </div>
                                                    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>
                                                    <div class="kv-fileinput-error file-error-message" data-style="display: none;"></div>
                                                </div>
                                            </div>
                                                <div class="kv-upload-progress hide"></div>
                                                <button type="button" tabindex="500" title="Clear selected files" class="btn btn-default fileinput-remove fileinput-remove-button">Remove</button>
                                                <button type="button" tabindex="500" title="Abort ongoing upload" class="btn btn-default hide fileinput-cancel fileinput-cancel-button"><i class="glyphicon glyphicon-ban-circle"></i> Cancel</button>
                                                <a href="/" tabindex="500" title="Upload selected files" class="btn btn-default fileinput-upload fileinput-upload-button">Upload</a>
                                                <div tabindex="500" class="btn btn-primary btn-file">Browse

<input type="file" name="form-register-photo" id="form-register-photo" /></div>
                                            </div>
                                            <span class="font12 font-italic">** photo must not bigger than 250kb</span>
                                        </div>



                                    </div>

                                    <div class="clear"></div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input type="text" class="form-control" value="Christine" />
                                        </div>

                                    </div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>Last Name</label>
                                            <input type="text" class="form-control" value="Gateau" />
                                        </div>

                                    </div>

                                    <div class="clear"></div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>Born</label>
                                            <div class="row gap-5">
                                                <div class="col-xs-3 col-sm-3">
                                                    <div class="btn-group bootstrap-select form-control"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="02"><span class="filter-option pull-left">02</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open"><ul class="dropdown-menu inner" role="menu"><li data-original-index="0"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">day</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">01</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2" class="selected"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">02</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">03</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select class="selectpicker form-control" data-live-search="false" tabindex="-98">
                                                        <option value="0">day</option>
                                                        <option value="1">01</option>
                                                        <option value="2" selected="">02</option>
                                                        <option value="3">03</option>
                                                    </select></div>
                                                </div>
                                                <div class="col-xs-5 col-sm-5">
                                                    <div class="btn-group bootstrap-select form-control"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Feb"><span class="filter-option pull-left">Feb</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open"><ul class="dropdown-menu inner" role="menu"><li data-original-index="0"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">month</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Jan</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2" class="selected"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Feb</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Mar</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select class="selectpicker form-control" data-live-search="false" tabindex="-98">
                                                        <option value="0">month</option>
                                                        <option value="1">Jan</option>
                                                        <option value="2" selected="">Feb</option>
                                                        <option value="3">Mar</option>
                                                    </select></div>
                                                </div>
                                                <div class="col-xs-4 col-sm-4">
                                                    <div class="btn-group bootstrap-select form-control"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="1986"><span class="filter-option pull-left">1986</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open"><ul class="dropdown-menu inner" role="menu"><li data-original-index="0"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">year</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">1985</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2" class="selected"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">1986</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">1987</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select class="selectpicker form-control" data-live-search="false" tabindex="-98">
                                                        <option value="0">year</option>
                                                        <option value="1">1985</option>
                                                        <option value="2" selected="">1986</option>
                                                        <option value="3">1987</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" class="form-control" value="myemail@gmail.com" />
                                        </div>

                                    </div>

                                    <div class="clear"></div>

                                    <div class="form-group">

                                        <div class="col-sm-12">
                                            <label>Education</label>
                                        </div>

                                        <div class="col-sm-6 col-md-4">
                                            <div class="btn-group bootstrap-select show-tick form-control mb-15"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Bachelor"><span class="filter-option pull-left">Bachelor</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open"><ul class="dropdown-menu inner" role="menu"><li data-original-index="0"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Select</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Diploma</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2" class="selected"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Bachelor</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Master</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Doctoral </span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Certificate</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select class="selectpicker show-tick form-control mb-15" data-live-search="false" tabindex="-98">
                                                <option value="0">Select</option>
                                                <option value="1">Diploma</option>
                                                <option value="2" selected="">Bachelor</option>
                                                <option value="3">Master</option>
                                                <option value="4">Doctoral </option>
                                                <option value="5">Certificate</option>
                                            </select></div>
                                        </div>

                                        <div class="col-sm-6 col-md-4">
                                            <input type="text" class="form-control mb-15" value="Engineering" />
                                        </div>

                                    </div>

                                    <div class="clear"></div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" class="form-control" value="254" />
                                        </div>

                                    </div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>City/town</label>
                                            <input type="text" class="form-control" value="Somewhere " />
                                        </div>

                                    </div>

                                    <div class="clear"></div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>Province/State</label>
                                            <input type="text" class="form-control" value="Paris" />
                                        </div>

                                    </div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>Street</label>
                                            <input type="text" class="form-control" value="Somewhere " />
                                        </div>

                                    </div>

                                    <div class="clear"></div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>Zip Code</label>
                                            <input type="text" class="form-control" value="35214" />
                                        </div>

                                    </div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>Country</label>
                                            <div class="btn-group bootstrap-select show-tick form-control"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="France"><span class="filter-option pull-left">France</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open"><ul class="dropdown-menu inner" role="menu"><li data-original-index="0"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Select</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Thailand</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2" class="selected"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">France</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">China</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Malaysia </span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" data-style="" data-tokens="null"><span class="text">Italy</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select class="selectpicker show-tick form-control" data-live-search="false" tabindex="-98">
                                                <option value="0">Select</option>
                                                <option value="1">Thailand</option>
                                                <option value="2" selected="">France</option>
                                                <option value="3">China</option>
                                                <option value="4">Malaysia </option>
                                                <option value="5">Italy</option>
                                            </select></div>
                                        </div>

                                    </div>

                                    <div class="clear"></div>

                                    <div class="col-sm-6 col-md-4">

                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" class="form-control" value="+66-85-221-5489" />
                                        </div>

                                    </div>

                                    <div class="clear"></div>

                                    <div class="col-sm-12 col-md-12">

                                        <div class="form-group bootstrap3-wysihtml5-wrapper">
                                            <label>About me</label>
                                            <ul class="wysihtml5-toolbar" data-style=""><li class="dropdown">
                                                <a class="btn btn-default dropdown-toggle " data-toggle="dropdown">

                                                    <span class="glyphicon glyphicon-font"></span>

                                                    <span class="current-font">Normal text</span>
                                                    <b class="caret"></b>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p" tabindex="-1" href="javascript:;" unselectable="on">Normal text</a></li>
                                                    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabindex="-1" href="javascript:;" unselectable="on">Heading 1</a></li>
                                                    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabindex="-1" href="javascript:;" unselectable="on">Heading 2</a></li>
                                                    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabindex="-1" href="javascript:;" unselectable="on">Heading 3</a></li>
                                                    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" tabindex="-1" href="javascript:;" unselectable="on">Heading 4</a></li>
                                                    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" tabindex="-1" href="javascript:;" unselectable="on">Heading 5</a></li>
                                                    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" tabindex="-1" href="javascript:;" unselectable="on">Heading 6</a></li>
                                                </ul>
                                            </li>
                                                <li>
                                                    <div class="btn-group">
                                                        <a class="btn  btn-default" data-wysihtml5-command="bold" title="CTRL+B" tabindex="-1" href="javascript:;" unselectable="on">Bold</a>
                                                        <a class="btn  btn-default" data-wysihtml5-command="italic" title="CTRL+I" tabindex="-1" href="javascript:;" unselectable="on">Italic</a>
                                                        <a class="btn  btn-default" data-wysihtml5-command="underline" title="CTRL+U" tabindex="-1" href="javascript:;" unselectable="on">Underline</a>

                                                        <a class="btn  btn-default" data-wysihtml5-command="small" title="CTRL+S" tabindex="-1" href="javascript:;" unselectable="on">Small</a>

                                                    </div>
                                                </li>
                                                <li>
                                                    <a class="btn  btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote" data-wysihtml5-display-format-name="false" tabindex="-1" href="javascript:;" unselectable="on">

                                                        <span class="glyphicon glyphicon-quote"></span>

                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="btn-group">
                                                        <a class="btn  btn-default" data-wysihtml5-command="insertUnorderedList" title="Unordered list" tabindex="-1" href="javascript:;" unselectable="on">

                                                            <span class="glyphicon glyphicon-list"></span>

                                                        </a>
                                                        <a class="btn  btn-default" data-wysihtml5-command="insertOrderedList" title="Ordered list" tabindex="-1" href="javascript:;" unselectable="on">

                                                            <span class="glyphicon glyphicon-th-list"></span>

                                                        </a>
                                                        <a class="btn  btn-default" data-wysihtml5-command="Outdent" title="Outdent" tabindex="-1" href="javascript:;" unselectable="on">

                                                            <span class="glyphicon glyphicon-indent-right"></span>

                                                        </a>
                                                        <a class="btn  btn-default" data-wysihtml5-command="Indent" title="Indent" tabindex="-1" href="javascript:;" unselectable="on">

                                                            <span class="glyphicon glyphicon-indent-left"></span>

                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="bootstrap-wysihtml5-insert-link-modal modal fade">
                                                        <div class="modal-dialog ">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <a class="close" data-dismiss="modal">×</a>
                                                                    <h3>Insert link</h3>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <input value="http://" class="bootstrap-wysihtml5-insert-link-url form-control" />
                                                                    <label class="checkbox">
                                                                        <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked="" />Open link in new window</label>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <a class="btn btn-default" data-dismiss="modal">Cancel</a>
                                                                    <a href="#" class="btn btn-primary" data-dismiss="modal">Insert link</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a class="btn  btn-default" data-wysihtml5-command="createLink" title="Insert link" tabindex="-1" href="javascript:;" unselectable="on">

                                                        <span class="glyphicon glyphicon-share"></span>

                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="bootstrap-wysihtml5-insert-image-modal modal fade">
                                                        <div class="modal-dialog ">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <a class="close" data-dismiss="modal">×</a>
                                                                    <h3>Insert image</h3>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <input value="http://" class="bootstrap-wysihtml5-insert-image-url form-control" />
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <a class="btn btn-default" data-dismiss="modal">Cancel</a>
                                                                    <a class="btn btn-primary" data-dismiss="modal">Insert image</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a class="btn  btn-default" data-wysihtml5-command="insertImage" title="Insert image" tabindex="-1" href="javascript:;" unselectable="on">

                                                        <span class="glyphicon glyphicon-picture"></span>

                                                    </a>
                                                </li>
                                            </ul><textarea class="bootstrap3-wysihtml5 form-control" data-style="height: 200px; display: none;" placeholder="Enter text ..."></textarea>

                                            <input type="hidden" name="_wysihtml5_mode" value="1" />

                                            <iframe class="wysihtml5-sandbox" security="restricted" allowtransparency="true" frameborder="0" width="0" height="0" marginwidth="0" marginheight="0" data-style="display: block; background-color: rgb(255, 255, 255); border-collapse: separate; border-color: rgb(204, 204, 204); border-style: solid; border-width: 1px; clear: none; float: none; margin: 0px; outline: rgb(85, 85, 85) none 0px; outline-offset: 0px; padding: 6px 12px; position: static; top: auto; left: auto; right: auto; bottom: auto; z-index: auto; vertical-align: baseline; text-align: start; box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px 0px inset; border-radius: 3px; width: 100%; height: 200px;"></iframe>
                                        </div>

                                    </div>

                                    <div class="clear"></div>

                                    <div class="col-sm-12 mt-10">
                                        <a href="#" class="btn btn-primary">Save</a>
                                        <a href="#" class="btn btn-primary btn-inverse">Cancel</a>
                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>


)

export default Dashboard
/* TODO: 1/2 done Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */
page('/about', aboutController.reveal);
page('/', articleController.reveal);

/* TODO: --DONE!-- What function do we call to activate page.js?
    Fire it off now, to execute it: */
page();
